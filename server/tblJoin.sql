select post.id, title, content, created, writer, email from myboard.post
left join myboard.profile on post.profile_id = profile.id;
