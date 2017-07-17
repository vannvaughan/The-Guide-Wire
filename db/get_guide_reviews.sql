SELECT guide_reviews.rating, guide_reviews.review, user_table.first_name, user_table.last_name
FROM guide_reviews
JOIN user_table
ON guide_reviews.poster_id = user_table.user_id
WHERE guide_reviews.user_id = $1;



