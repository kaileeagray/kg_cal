# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
50.times do
  [Faker::StarWars.quote, Faker::Beer.name, Faker::GameOfThrones.character, Faker::Hipster.sentence(3)].each do |faker|
    event = Event.new
    event.title = faker
    start = Faker::Time.between(1.year.ago, Date.today + 1.year, :morning)
    event.start = start
    event.end = Faker::Time.between(start, start + 2.days, :evening)
    event.color = ['black','green','red', nil].sample
    event.save
  end
end
