SELECT user_id, rating, review
FROM guide_reviews
WHERE guide_id = $1;


