import Database from 'bun:sqlite';

const db: Database = new Database('todo-list-db.sqlite');

db.query(`CREATE TABLE IF NOT EXISTS "todos" (
    id TEXT NOT NULL,
    content TEXT NOT NULL,
    checked BOOLEAN NOT NULL DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id),
    PRIMARY KEY (id)
  )`).run();
db.query('CREATE UNIQUE INDEX IF NOT EXISTS todo_id_IDX ON "todos" (id)').run();
db.query('CREATE UNIQUE INDEX IF NOT EXISTS created_at_IDX ON "todos" (created_at)').run();

export default db;
