CREATE TABLE task_archetype (
  id            BIGSERIAL PRIMARY KEY,
  description   VARCHAR(256) UNIQUE,
  created_at    TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at    TIMESTAMP NOT NULL DEFAULT current_timestamp
);
CREATE TRIGGER update_task_archetype_updated_at BEFORE UPDATE ON task_archetype FOR EACH ROW EXECUTE PROCEDURE sync_updated_at_column();
