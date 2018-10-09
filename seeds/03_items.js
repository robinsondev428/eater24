exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('items').del()
    .then(function () {
      // Inserts seed entries
      return knex('items').insert([
        {
          restaurant_id: 1, 
          name: 'Black Cod', 
          price: '25', 
          descriptions: 'saskatchewan chanterelles, sunflower seed fat, spinach', 
          allergens: 'sunflower seeds',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Giant Clam', 
          price: '18', 
          descriptions: 'buttermilk whey, smoked potato, celery', 
          allergens: 'diary, seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 1, 
          name: 'Wild Boar Rib', 
          price: '32', 
          descriptions: 'eucalyptus, fennel pollen, pine needle', 
          allergens: 'pollen',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Herb Crusted Loin of Lamb', 
          price: '27', 
          descriptions: 'Herb Crusted Loin of Lamb with Summer Vegetable Tian and Polenta', 
          allergens: 'N/A',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Mousseline Wrapped Pork Tenderloin', 
          price: '18', 
          descriptions: 'Mousseline Wrapped Pork Tenderloin with Braised Cheeks, Cranberry Beans, Favas and Fennel Confit', 
          allergens: 'beans',
          created_at: new Date(),
          updated_at: new Date()
        },
        {
          restaurant_id: 2, 
          name: 'Horseradish Crusted Salmon Medallion', 
          price: '24', 
          descriptions: 'Horseradish Crusted Salmon Medallion with Dilled Cucumbers and Mustard Sauce ', 
          allergens: 'horseradish, mustard, seafood',
          created_at: new Date(),
          updated_at: new Date()
        },
      ]);
    });
};
