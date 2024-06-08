const { Firestore } = require('@google-cloud/firestore');
import { Firestore } from '@google-cloud/firestore';
import { storeData } from './dataService';

const storData = async (id, data) => {
    const db =  new Firestore({
        keyFilename: process.env.GOOGLE_APPLICATION_CREDENTIALS,
        projectId: 'submissionmlgc-nurfajri',
        databaseId: '(default)'
    });

    const predictCollection = db.collection('predictions');
    return predictCollection.doc(id).set(data);
}

export default storeData;