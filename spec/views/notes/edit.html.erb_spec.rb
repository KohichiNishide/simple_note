require 'rails_helper'

RSpec.describe "notes/edit", :type => :view do
  before(:each) do
    @note = assign(:note, Note.create!(
      :title => "MyString",
      :raw_body => "MyText",
      :body => "MyText"
    ))
  end

  it "renders the edit note form" do
    render

    assert_select "form[action=?][method=?]", note_path(@note), "post" do

      assert_select "input#note_title[name=?]", "note[title]"

      assert_select "textarea#note_raw_body[name=?]", "note[raw_body]"

      assert_select "textarea#note_body[name=?]", "note[body]"
    end
  end
end
