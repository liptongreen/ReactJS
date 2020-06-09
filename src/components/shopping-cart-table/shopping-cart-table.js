import React from "react";
import "./shopping-cart-table.css";
import { connect } from "react-redux";
import { booksAddToCart, booksRemoveToCart } from "../../actions";

const CartItem = props => {
	const { item, onInc, onDeg, onDel } = props;
	const { title, price, count, id } = item;
	return (
		<tr>
			<td>1</td>
			<td>{title}</td>
			<td>{count}</td>
			<td>${price}</td>
			<td>
				<button
					className="btn btn-outline-danger btn-sm float-right"
					onClick={() => onDel(id)}
				>
					<i className="fa fa-trash-o" />
				</button>
				<button
					className="btn btn-outline-success btn-sm float-right"
					onClick={() => onInc(id)}
				>
					<i className="fa fa-plus-circle" />
				</button>
				<button
					className="btn btn-outline-warning btn-sm float-right"
					onClick={() => onDeg(id)}
				>
					<i className="fa fa-minus-circle" />
				</button>
			</td>
		</tr>
	);
};

const ShoppingCartTable = props => {
	const { total, cartItem, onInc, onDeg, onDel } = props;

	return (
		<div className="shopping-cart-table">
			<h2>Your Order</h2>
			<table className="table">
				<thead>
					<tr>
						<th>#</th>
						<th>Item</th>
						<th>Count</th>
						<th>Price</th>
						<th>Action</th>
					</tr>
				</thead>

				<tbody>
					{cartItem.map(item => {
						return (
							<CartItem
								key={item.id}
								item={item}
								onInc={onInc}
								onDeg={onDeg}
								onDel={onDel}
							/>
						);
					})}
				</tbody>
			</table>

			<div className="total">Total: ${total}</div>
		</div>
	);
};

const mapStateToProps = state => {
	return {
		total: state.totalOrder,
		cartItem: state.cartItems,
	};
};

const mapDispatchToProps = dispatch => {
	return {
		onInc: id => {
			dispatch(booksAddToCart(id));
		},
		onDeg: id => {
			dispatch(booksRemoveToCart(id));
		},
		onDel: id => {
			booksAddToCart(id);
		},
	};
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
