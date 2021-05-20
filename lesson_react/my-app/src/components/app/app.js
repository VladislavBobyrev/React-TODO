// зависимости
import React, { Component } from 'react'
import AppHeader from '../app-header/app-header'
import SearchPanel from '../search-panel/search-panel'
import PostStatusFilter from '../post-statys-filter/post-statys-filter'
import PostList from '../post-list/post-list'
import PostAddForm from '../post-add-form/post-add-form'
//style css
import './app.css'
// класс
export default class App extends Component {
	constructor(props) {
		super(props)
		// стэйт  на ПРЯМУЮ СТЭЙТ ИЗМЕНЯТЬ НЕЛЬЗЯ
		this.state = {
			data: [
				{ label: 'going to learn react', important: false, like: false, id: 1 },
				{ label: 'learn English', important: false, like: false, id: 2 },
				{ label: 'Going to run 3km', important: true, like: false, id: 3 },
			]
		}
		// биндим для того чтобы привязать контекст вызова 
		this.deliteItem = this.deliteItem.bind(this)
		this.addItem = this.addItem.bind(this)
		this.onToggleImportant = this.onToggleImportant.bind(this)
		this.onToggleLiked = this.onToggleLiked.bind(this)

		this.maxId = 4
	}
	// метод
	deliteItem(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const before = data.slice(0, index) // получаем первую половину массива до того id который нужен
			const after = data.slice(index + 1) // вторая половина до конца 
			const newArray = [...before, ...after] // соединяем в новый массив потому что нельзя менять сушествующий стэйт

			return {
				data: newArray // в дату записываем новый массив
			}
		})
	}

	// метод
	addItem(body) {
		const newItem = {
			label: body,
			important: false,
			id: this.maxId++,
		}
		this.setState(({ data }) => {
			const newArr = [...data, newItem]
			return {
				data: newArr
			}
		})
	}

	// функция
	onToggleImportant(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const old = data[index]
			const newItem = { ...old, important: !old.important }
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

			return {
				data: newArr
			}
		})
	}

	onToggleLiked(id) {
		this.setState(({ data }) => {
			const index = data.findIndex(elem => elem.id === id)

			const old = data[index]
			const newItem = { ...old, like: !old.like }
			const newArr = [...data.slice(0, index), newItem, ...data.slice(index + 1)]

			return {
				data: newArr
			}
		})
	}

	// метод
	render() {
		const { data } = this.state
		const liked = data.filter(item => item.like).length
		const allPosts = data.length

		return (
			<div className='app'>
				<AppHeader
					liked={liked}
					allPosts={allPosts}
				/>
				<div className='search-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deliteItem}
					onToggleImportant={this.onToggleImportant}
					onToggleLiked={this.onToggleLiked}
				/>
				<PostAddForm
					onAdd={this.addItem} />
			</div>
		)
	}
}
