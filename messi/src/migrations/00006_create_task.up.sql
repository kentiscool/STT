CREATE TABLE task (
  id                BIGSERIAL PRIMARY KEY,
  client_id         BIGINT REFERENCES client(id),
  user_id           BIGINT REFERENCES user_account(id),
  task_archetype_id BIGINT REFERENCES task_archetype_archetype(id),
  total_time        real,
  total_distance    real, 
  data              JSONB,
  created_at        TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at        TIMESTAMP NOT NULL DEFAULT current_timestamp
);
CREATE INDEX task_client_id_idx ON task(client_id);
CREATE INDEX task_user_id_idx ON task(user_id);
CREATE TRIGGER update_task_archetype_updated_at BEFORE UPDATE ON task_archetype FOR EACH ROW EXECUTE PROCEDURE sync_updated_at_column();