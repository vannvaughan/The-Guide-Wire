select * from user_table 
where user_table.first_name = $1 and user_table.last_name = $2 and user_table.user_password = $3;