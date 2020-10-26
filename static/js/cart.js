var updateBtns = document.getElementsByClassName("update-cart");

for (i = 0; i < updateBtns.length; i++) {
	updateBtns[i].addEventListener("click", function () {
		var productId = this.dataset.product;
		var action = this.dataset.action;

		console.log("action", action, "productId", productId);

		console.log("USER:", user);
		if (user == "AnonymousUser") {
			console.log("User is not authorized");
		} else {
			updateUserOrder(productId, action);
		}
	});
}

function updateUserOrder(productId, action) {
	var url = "/update_item/";

	fetch(url, {
		method: "POST",
		headers: {
			Content_Type: "application/json",
			"X-CSRFToken": csrf_token,
		},
		body: JSON.stringify({
			productId: productId,
			action: action,
		}),
	})
		.then((response) => {
			return response.json();
		})
		.then((data) => {
			console.log("data:" + data);
			location.reload();
		});
}
