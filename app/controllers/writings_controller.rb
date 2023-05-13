class WritingsController < ApplicationController

  private

  def writing_setting_params
    params.require(:writing_setting).permit(:timer, :prompt)
  end
end
