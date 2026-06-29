import { useState } from 'react';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonButton,
  useIonToast // 1. NUEVO: Importa la herramienta para mensajes flotantes
} from '@ionic/react';
import { createRepository } from '../services/GithubService';

import './Tab2.css';

const Tab2: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  // 2. NUEVO: Preparam la función que mostrará el mensaje en pantalla
  const [presentToast] = useIonToast();

  const handleCrearRepositorio = async () => {
    if (name.trim() === '') {
      // 3. :presentToast
      presentToast({
        message: 'Por favor, ingresa el nombre del repositorio.',
        duration: 2000,
        color: 'warning' // Color amarillo de advertencia
      });
      return; 
    }

    try {
      await createRepository(name, description, false);
      
      // 4. REEMPLAZO: Mensaje de éxito nativo
      presentToast({
        message: '¡Repositorio creado con éxito!',
        duration: 2000,
        color: 'success' // Color verde de éxito
      });
      
      setName('');
      setDescription('');

    } catch (error) {
      // 5. REEMPLAZO: Mensaje de error nativo
      presentToast({
        message: 'Hubo un error al crear el repositorio. Intenta con otro nombre.',
        duration: 3000, // Lo dejamos 3 segundos para que alcance a leer
        color: 'danger' // Color rojo de error
      });
    }
  };

  return (
    //  ...
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Formulario de repositorio</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">
              Formulario de repositorio
            </IonTitle>
          </IonToolbar>
        </IonHeader>

        <div className="form-container">
          <IonInput
            className="form-field"
            label="Nombre del repositorio"
            labelPlacement="floating"
            placeholder="Ingrese el nombre del repositorio"
            value={name}
            onIonInput={(e) => setName(e.detail.value || '')}
          />

          <IonTextarea
            className="form-field"
            label="Descripción"
            labelPlacement="floating"
            placeholder="Ingrese la descripción del repositorio"
            rows={6}
            value={description}
            onIonInput={(e) => setDescription(e.detail.value || '')}
          />

          <IonButton
            className="form-field"
            expand="block"
            color="primary"
            onClick={handleCrearRepositorio}
          >
            Guardar
          </IonButton>

        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;