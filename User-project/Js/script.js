function getUsers() {
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://gorest.co.in/public-api/users', true);
xhr.setRequestHeader('Authorization', 'Bearer 438e207f2c3c34b5d3a416c14f011eae142712aaf63d802a259b8330d5f93e08');
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			let users = response.data;
			if (users.length > 0) {
				displayUserList(users);
				getPosts(users[0].id);
			} else {
				displayNoUsersMessage();
			}
		} else {
			console.error('Помилка отримання списку користувачів:', xhr.status);
		}
	}
};
xhr.send();
}
function displayNoUsersMessage() {
let userListElement = document.getElementById('userList');
userListElement.innerHTML = 'Користувачі незнайдені';
userListElement.classList.add('fs-3');
userListElement.classList.add('text-light');
userListElement.classList.add('text-bg-dark');
userListElement.classList.add('p-1');
}

function displayUserList(users) {
let userListElement = document.getElementById('userList');
userListElement.innerHTML = '';
users.forEach(function(user) {
	let listItem = document.createElement('li');
	listItem.textContent = user.name;
	listItem.classList.add('list-group-item');
	if (user.status === 'active') {
		listItem.classList.add('active');
	} else {
		listItem.classList.add('inactive');
	}
	userListElement.appendChild(listItem);
	listItem.addEventListener('click', function() {
		let userDetailsElement = document.getElementById('userDetails');
		userDetailsElement.innerHTML = `Name: ${user.name}<br>Email: ${user.email}<br>Gender: ${user.gender}<br>Status: ${user.status}`;
		getPosts(user.id);
	});
});

if (users.length > 0) {
	displayUserDetails(users[0]);
}
}

function displayUserDetails(user) {
let userDetailsElement = document.getElementById('userDetails');
userDetailsElement.innerHTML = `Name: ${user.name}<br>Email: ${user.email}<br>Gender: ${user.gender}<br>Status: ${user.status}`;
}

function getPosts(userId) {
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://gorest.co.in/public-api/posts?user_id=${userId}`, true);
xhr.setRequestHeader('Authorization', 'Bearer 438e207f2c3c34b5d3a416c14f011eae142712aaf63d802a259b8330d5f93e08');
xhr.onreadystatechange = function() {
if (xhr.readyState === XMLHttpRequest.DONE) {
	if (xhr.status === 200) {
		let response = JSON.parse(xhr.responseText);
		let posts = response.data;
		if (posts.length > 0) {
			displayPostList(posts);
		} else {
			displayNoPostsMessage();
		}
	} else {
		console.error('Помилка отримання списку постів:', xhr.status);
	}
}
};
xhr.send();
}

function getComments(postId, callback) {
let xhr = new XMLHttpRequest();
xhr.open('GET', `https://gorest.co.in/public-api/comments?post_id=${postId}`, true);
xhr.setRequestHeader('Authorization', 'Bearer 438e207f2c3c34b5d3a416c14f011eae142712aaf63d802a259b8330d5f93e08');
xhr.onreadystatechange = function() {
	if (xhr.readyState === XMLHttpRequest.DONE) {
		if (xhr.status === 200) {
			let response = JSON.parse(xhr.responseText);
			let comments = response.data;
			callback(comments);
		} else {
			console.error('Ошибка получения списка комментариев:', xhr.status);
			callback([]);
		}
	}
};
xhr.send();
}

function displayNoPostsMessage() {
let postListElement = document.getElementById('postList');
postListElement.innerHTML = 'У даного користувача відсутні пости';
postListElement.classList.add('fs-3');
postListElement.classList.add('text-light');
postListElement.classList.add('text-bg-dark');
postListElement.classList.add('p-1');
}

function displayPostList(posts) {
let postListElement = document.getElementById('postList');
postListElement.innerHTML = '';

posts.forEach(function(post) {
	let listItem = document.createElement('li');
	listItem.classList.add('post');
	listItem.classList.add('list-group-item');

	let titleElement = document.createElement('h3');
	titleElement.textContent = post.title;
	listItem.appendChild(titleElement);

	let bodyElement = document.createElement('p');
	bodyElement.textContent = post.body.substring(0, 100) + '...';
	listItem.appendChild(bodyElement);

	let detailsElement = document.createElement('div');
	detailsElement.classList.add('post-details');
	detailsElement.innerHTML = `<p>${post.body}</p>`;
	listItem.appendChild(detailsElement);

	let commentsElement = document.createElement('div');
	commentsElement.classList.add('post-comments');
	commentsElement.innerHTML = '<h4>Комментарии:</h4>';
	detailsElement.appendChild(commentsElement);

	getComments(post.id, function(comments) {
		if (comments.length > 0) {
			comments.forEach(function(comment) {
				let commentItem = document.createElement('p');
				commentItem.textContent = comment.body;
				commentsElement.appendChild(commentItem);
			});
		} else {
			let noCommentsMessage = document.createElement('p');
			noCommentsMessage.textContent = 'Комментарии відсутні';
			commentsElement.appendChild(noCommentsMessage);
		}
	});

	listItem.addEventListener('click', function() {
		bodyElement.style.display = bodyElement.style.display === 'none' ? '' : 'none';
		detailsElement.classList.toggle('expanded');
	});

	postListElement.appendChild(listItem);
});
}

document.addEventListener('DOMContentLoaded', function() {
getUsers();
getPosts(userId);
});


