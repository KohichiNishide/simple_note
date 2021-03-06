require 'rails_helper'

RSpec.describe "notes/new", :type => :view do
  before(:each) do
    assign(:note, Note.new(
      :title => "MyString",
      :raw_body => "MyText",
      :body => "MyText"
    ))
  end

  it "renders new note form" do
    render

    assert_select "form[action=?][method=?]", notes_path, "post" do

      assert_select "input#note_title[name=?]", "note[title]"

      assert_select "textarea#note_raw_body[name=?]", "note[raw_body]"

      assert_select "textarea#note_body[name=?]", "note[body]"
    end
  end
end
