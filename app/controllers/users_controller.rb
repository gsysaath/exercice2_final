class UsersController < ApplicationController
  def create
    @user = User.new(user_params)
    @form = Form.last
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

    if @user.save
      @form.user = @user
      @form.save
      redirect_to complete_path
    else
      render :template => 'forms/show'
    end
  end

  private

  def user_params
    params.require(:user).permit(:first_name,
      :last_name,
      :email,
      :phone_number)
  end
end
