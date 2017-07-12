INSERT INTO guide_reviews (user_id, rating, review)
VALUES $1, $2, $3
RETURNING *;