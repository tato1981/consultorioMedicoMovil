
const API = 'http:///192.168.18.30:8000/admins'
 

//consultar registros
 export const getAdmins = async () => {
  const res = await fetch(API)
  return await res.json();    
  }

  //consultar un registrs
export const getAdmin = async (id) => {
    const res = await fetch(`${API}/${id}`)
    return await res.json()
  }

  //consultar registros
   export const adminLogin = async () => {
   const res = await fetch(API)
   return await res.json();
  }
  


//crear un admin
  export const createAdmin = async (newAdmin) => {
    try {
      const res = await fetch(API, {
        method: 'POST',
        headers: {
          accept: 'application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newAdmin)
      })
      return await res.json()              

        
    } catch (error) {
        console.error('Error al crear usuario:', error);
    }   
        
  }

  //eliminar un admin
  export const deleteAdmin = async (id)=>{ 
    console.log(id)  
    await fetch(`${API}/${id}`, {
      method: 'DELETE',
      
    }) 
  }


  //updateAdmin
  export const updateAdmin = async (id, newAdmin) => {
    const res = await fetch(`${API}/${id}`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newAdmin)
    })
    return res;
  }