import React, { useState, useEffect } from 'react';
import { FlatList } from 'react-native';
import ContactListItem from '../components/contactListItem';
import { API, graphqlOperation } from 'aws-amplify';
import { listUsers } from '../graphql/queries';
import { deleteUser } from '../graphql/mutations'; // Importa

// Limpia la caché de Amplify DataStore

const ContactsScreen = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    try {
    
      const result = await API.graphql(graphqlOperation(listUsers));
      console.log(result.data)
      setUsers(result.data?.listUsers?.items);
     // Elimina cada usuario utilizando la operación de mutación
      // users.forEach(async (user) => {
      //   console.log(user.id)
      //   await API.graphql(graphqlOperation(deleteUser, { input: { id: user.id } }));
      //   console.log(deleteUser)
        
      // });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  return (
    <FlatList
      data={users}
      renderItem={({ item }) => <ContactListItem user={item} />}
      style={{ backgroundColor: 'white' }}
    />
  );
};

export default ContactsScreen;
