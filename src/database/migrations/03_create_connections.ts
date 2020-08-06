import Knex from 'knex';

export async function up (knex: Knex){
    return knex.schema.createTable('connections', table => {
        table.increments('id').primary();

        table.integer('user_id')
        .notNullable()
        .references('id')
        .inTable('users')
        .onUpdate('CASCADE') //Caso o ID do professor for atualizado, todas as tabelas(Como as aulas), também terão o ID do professor atualizado em forma de cascata.
        .onDelete('CASCADE');

        table.timestamp('create_at')
        .defaultTo(knex.raw('CURRENT_TIMESTAMP'))
        .notNullable();
    });
}

export async function down(knex: Knex){
    return knex.schema.dropTable('connections');
}