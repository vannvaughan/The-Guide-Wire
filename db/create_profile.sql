INSERT INTO user_table (first_name, last_name, location, bio, traveler, guide, user_password) 
VALUES ($1, $2, $3, $4, $5, $6, $7)
RETURNING *;