INSERT INTO guide_reviews (guide_id, rating, review, user_id)
VALUES $1, $2, $3, $4
RETURNING *;