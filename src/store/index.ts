//Exported actions to simply import everywhere in the code.

export {
	testDataObject, testDataArray, testDataCount,
	WsActions
} from './ws/ws.selectors-dispatchers';
export { storedExamplesMap, StorageActions } from './storage/storage.selectors-dispatchers';
export { storedTestsMap, SecureStorageActions } from './secure-storage/secure-storage.selectors-dispatchers';