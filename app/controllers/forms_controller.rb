class FormsController < ApplicationController
  def new
    @form = Form.new
  end

  def create
    @form = Form.new(form_params)
    @form.user = User.last
    if @form.save
      redirect_to form_path(@form)
    else
      render :new
    end
  end

  def show
    @user = User.new
    @form = Form.find(params[:id])
    @address_departure = Address.create(address: @form.address_departure)
    @address_departure.country = Geocoder.search([@address_departure.latitude, @address_departure.longitude]).first.country
    @address_departure.save
    @address_destination = Address.create(address: @form.address_destination)
    @address_destination.country = Geocoder.search([@address_destination.latitude, @address_destination.longitude]).first.country
    @address_destination.save
    @distance = Geocoder::Calculations.distance_between([@address_departure.latitude, @address_departure.longitude], [@address_destination.latitude, @address_destination.longitude])
    if @distance <= 1500
      @montant = 250
    elsif @distance > 1500 && Address::EU.include?(@address_departure.country) && Address::EU.include?(@address_destination.country)
      @montant = 400
    elsif @distance > 1500 && @distance < 3500
      @montant = 400
    else
      @montant = 600
    end

    if @form.delay == Form::RETARD_DELAYS[1] ||
      Form::RETARD_REASONS[0..1].include?(@form.reason) ||
      @form.reason == Form::SURBOOKING_REASONS[0] ||
      @form.delay == Form::ANNULATION_DELAYS[0] ||
      (@form.delay == Form::ANNULATION_DELAYS[1] && @form.reason != Form::ANNULATION_REASONS[4]) ||
      (@form.delay == Form::ANNULATION_DELAYS[2] && Form::ANNULATION_REASONS[1..2].include?(@form.reason))
      @right = true
    end
  end

  private

  def form_params
    params.require(:form).permit(:genre,
      :address_departure,
      :address_destination,
      :user_id,
      :delay,
      :reason,
      :status)
  end

end
