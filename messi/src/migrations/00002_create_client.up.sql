CREATE TABLE client (
  id    BIGSERIAL PRIMARY KEY,
  ip    VARCHAR(32),
  model VARCHAR(32),
  created_at  TIMESTAMP NOT NULL DEFAULT current_timestamp,
  updated_at  TIMESTAMP NOT NULL DEFAULT current_timestamp
);
CREATE TRIGGER update_client_updated_at BEFORE UPDATE ON client FOR EACH ROW EXECUTE PROCEDURE sync_updated_at_column();
