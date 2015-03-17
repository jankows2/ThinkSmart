class CreateQuizzs < ActiveRecord::Migration
  def change
    create_table :quizzs do |t|
      t.string :quizz

      t.timestamps null: false
    end
  end
end
