CREATE TYPE client_access_type AS ENUM ('OWNER', 'ADMIN', 'USER', 'OTHER');

CREATE TABLE user_client (
    id              BIGSERIAL PRIMARY KEY,
    client_id       BIGINT REFERENCES client(id) ON DELETE CASCADE,
    user_id         BIGINT REFERENCES user_account(id) ON DELETE CASCADE,
    access_type     client_access_type, 
    UNIQUE(client_id, user_id)
);
CREATE INDEX user_client_client_id_idx ON user_client(client_id);
CREATE INDEX user_client_user_id_idx ON user_client(user_id);
CREATE TRIGGER update_user_client_updated_at BEFORE UPDATE ON user_client FOR EACH ROW EXECUTE PROCEDURE sync_updated_at_column();


