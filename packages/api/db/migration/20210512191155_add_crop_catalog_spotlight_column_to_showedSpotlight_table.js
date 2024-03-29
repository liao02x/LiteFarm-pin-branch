export const up = function (knex) {
  return knex.schema.alterTable('showedSpotlight', (t) => {
    t.boolean('crop_catalog').defaultTo(false);
    t.timestamp('crop_catalog_end').nullable().defaultTo(null);
  });
};

export const down = function (knex) {
  return knex.schema.alterTable('showedSpotlight', (t) => {
    t.dropColumn('crop_catalog');
    t.dropColumn('crop_catalog_end');
  });
};
