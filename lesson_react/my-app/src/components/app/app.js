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
				{ label: 'going to learn react', important: false, id: 'lsjdf' },
				{ label: 'learn English', important: false, id: 'kljsdlfj' },
				{ label: 'Going to run 3km', important: true, id: 'bxcvm' },
			]
		}
		this.deliteItem = this.deliteItem.bind(this)
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
	render() {
		return (
			<div className='app'>
				<AppHeader />
				<div className='search-panel d-flex'>
					<SearchPanel />
					<PostStatusFilter />
				</div>
				<PostList
					posts={this.state.data}
					onDelete={this.deliteItem}
				/>
				<PostAddForm />
			</div>
		)
	}
}
