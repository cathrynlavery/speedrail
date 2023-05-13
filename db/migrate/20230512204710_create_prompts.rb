class CreatePrompts < ActiveRecord::Migration[7.0]
  def change
    create_table :prompts do |t|
      t.integer :category_id
      t.text :content

      t.timestamps
    end
  end
end
