import knex, { Knex } from "knex";

class TelegramBot {
	database: Knex;
	constructor() {
		this.database = knex({
			client: "sqlite3",
			connection: { filename: "./data.db" },
			useNullAsDefault: true,
		});
	}
}

export default TelegramBot;
