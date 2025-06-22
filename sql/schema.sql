CREATE DATABASE datastar_todo_list;

CREATE USER dstodouser WITH PASSWORD 'dstodo1';

CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE todos (
    id UUID DEFAULT uuid_generate_v4() NOT NULL,
    content TEXT NOT NULL,
    user_id UUID,
    checked BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    UNIQUE (id),
    PRIMARY KEY (id)
);

GRANT SELECT ON ALL TABLES IN SCHEMA public TO dstodouser;
GRANT INSERT ON ALL TABLES IN SCHEMA public TO dstodouser;
GRANT UPDATE ON ALL TABLES IN SCHEMA public TO dstodouser;
GRANT DELETE ON ALL TABLES IN SCHEMA public TO dstodouser;

INSERT INTO todos (content, user_id) VALUES ('Go Gym', '7402e76c-e5bd-4862-ab6b-b742f664b17e');
INSERT INTO todos (content, user_id) VALUES ('Learn Datastar', '7402e76c-e5bd-4862-ab6b-b742f664b17e');
