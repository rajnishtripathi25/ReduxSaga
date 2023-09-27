import { put, call, takeEvery } from 'redux-saga/effects'
import { getcatsSuccess } from './catstate'


function* workGetCatsFetch() {
    const cats = yield call(() => fetch('https://jsonplaceholder.typicode.com/users'))
    const respose = yield cats.json()
    yield put(getcatsSuccess(respose))
}

function* catSaga() {
    yield takeEvery('cats/getcatsFetch', workGetCatsFetch)
}

export default catSaga