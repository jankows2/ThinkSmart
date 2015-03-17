class QuizzController < ApplicationController
  def create
    respond_with Quizz.create(quizz_params)
  end

  def index
    respond_with Quizz.all
  end

  def destroy
    @quizz = Quizz.find(params[:id])
    respond_with @quizz.destroy
  end

  def quizz_params
    params.require(:quizz).permit(:quizz)
  end
end
