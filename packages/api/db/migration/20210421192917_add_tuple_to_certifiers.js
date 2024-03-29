const certifiers = [
  { certification_type: 2, certifier_name: 'Rede Ecovida', certifier_acronym: 'Ecovida' },
];

export const up = async function (knex) {
  await knex.batchInsert('certifiers', certifiers);
};

export const down = async function (knex) {
  for (const certifier of certifiers) {
    await knex('certifiers').where(certifier).delete();
  }
};
