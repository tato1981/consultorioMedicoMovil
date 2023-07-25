import React, {useState, useEffect} from 'react'
import { FlatList, RefreshControl } from 'react-native'
import { useIsFocused } from '@react-navigation/native'
import { getAdmins, deleteAdmin } from '../api';
import AdminItems from './AdminItems'


const ListaAdmin = () => {
    
  const [admins, setAdmins] = useState([])
  const [refreshing, setRefreshing] = useState(false)
  const isFocused = useIsFocused()
  
  const loadAdmins = async() =>{
    const data =await getAdmins()
    setAdmins(data);
 
  }

  const handleDelete = async(id) =>{      
    await deleteAdmin(id)
    await loadAdmins()
  }
    
  useEffect(() => {
    loadAdmins();
    
  },[isFocused])


    const renderItem = ({item}) => {
      return <AdminItems admin={item} handleDelete={handleDelete} />
    }

    const onRefresh = React.useCallback(async () => {
      setRefreshing(true);
      await loadAdmins()
      setRefreshing(false);
    })
    
  return (
    <FlatList
        style={{width: '100%'}}
        data={admins}
        keyExtractor={(item) => item.id + ''}
        renderItem={renderItem}
        refreshControl={
          <RefreshControl
          refreshing={refreshing}
          colors={['#78e08f']} 
          onRefresh={onRefresh}
          progressBackgroundColor='#0a3d62'
          />
        }           
    >
        
    </FlatList>
  )
}

export default ListaAdmin
