class PagesController < ApplicationController
  def home
  end

  def complete
    @user = User.last
    @form = Form.last
  end
end
