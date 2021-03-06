import React, { Component } from 'react';

const App = () => {
	return <Counter />
}

class Counter extends Component
{
	constructor(props)
	{
		super(props);
		this.state = {
			value : 0
		}
	}

	//インクリメントする関数
	onIncrement = () => {
		//setStateでstateの値を更新
		this.setState({ value : this.state.value + 1});
	}

	//デクリメントする関数
	onDecrement = () => {
		//setStateでstateの値を更新
		this.setState({ value : this.state.value - 1});
	}

	render()
	{
		return (
			<div>
				<div>
					カウント値:{this.state.value}
				</div>
				<div>
					<button type="button" onClick={this.onIncrement}>+</button>
          			<button type="button" onClick={this.onDecrement}>-</button>
				</div>
			</div>
		);
	}
}


//varとletの違い
const testScope = (scope) => {
	if (scope === 'function') {
		var functionScopen = "関数スコープ内ならどこでも参照可能です。"
	} else if (scope === 'block') {
		let blockScope = 'ブロックスコープ以内でしか参照できません。'
		console.log(blockScope)
	}
	console.log(functionScopen)
}

testScope('function')
testScope('block')


//mutable(宣言後に変更可能)  immutable(宣言後に変更不可能)
let mutableTxet = 'let変更前';
mutableTxet = 'let変更後';
console.log(mutableTxet);

const immutableText = 'const変更前';
console.log(immutableText);

const mutableArray = [1, 2, 3];
mutableArray.push(4)
console.log(mutableArray);

const mutableObject = {id: '1', value: '200円'}
mutableObject['name'] = 'ちくわ'
console.log(mutableObject);


//アロー関数
function nameFunc(message) {
	console.log(message)
}
nameFunc('これは名前付き関数です。')

const arrowFunc = (message) => {
	console.log(message)
}
arrowFunc('これはアロー関数です。')

const oenLineArroowFunc = (message) => console.log(message);
oenLineArroowFunc('これは一行で書いたアロー関数です。')

const uers = {
	name: 'mizuta'
}
const getUsername = (userId) => uers[userId];
const uername = getUsername('name')
console.log(uername)

//上はreturnの省略系
const uers2 = {
	name2: 'アシタカ'
}
const getUsername2 = (userId) => {
	return uers2[userId]
}
const uername2 = getUsername2('name2')
console.log(uername2)


//map() 新しい配列を作る。
const array = [1, 2, 4, 8];
const resultArray = array.map(x => x * 2)
console.log(resultArray)

const object = {
	"りんご": {text: "赤い"},
	"バナナ": {text: "黄色い"},
	"アボカド": {text: "黒い"}
};

const objectToArray = Object.keys(object).map(key => {
	const value = object[key]
	value['id'] = key
	console.log(value)
	return value
});
console.log(objectToArray)


//filter() 条件に合う要素を抽出
const objectArray = [
	{ id: "1", text: "1番目"},
	{ id: "2", text: "2番目"},
	{ id: "3", text: "3番目"}
];
const result = objectArray.filter(object => {
	return object.id === '1'
})
console.log(result[0])


//findIndex() 要素の何番目かを知る
const objectArray2 = [
	{ id: "1", text: "1番目"},
	{ id: "2", text: "2番目"},
	{ id: "3", text: "3番目"}
];
const index = objectArray2.findIndex(object => {
	return object.id === '1'
})
console.log(index, objectArray[index])

































export default App;