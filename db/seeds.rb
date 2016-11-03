# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
5.times do
  [Faker::StarWars.quote, Faker::Beer.name, Faker::GameOfThrones.character, Faker::Pokemon.location].each do |faker|
    event = Event.new
    event.title = faker
    start = Faker::Time.between(2.months.ago, Date.today + 2.months, :morning)
    event.start = start
    event.save
  end
end

5.times do
  [Faker::StarWars.planet, Faker::Beer.style, Faker::GameOfThrones.house, Faker::Hacker.ingverb].each do |faker|
    event = Event.new
    event.title = faker
    start = Faker::Time.between(2.months.ago, Date.today + 2.months, :afternoon)
    event.start = start
    event.save
  end
end

5.times do
  [Faker::Space.nebula, Faker::Pokemon.name, Faker::Space.agency, Faker::Superhero.power].each do |faker|
    event = Event.new
    event.title = faker
    start = Faker::Time.between(2.months.ago, Date.today + 2.months, :evening)
    event.start = start
    event.save
  end
end
