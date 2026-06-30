import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  IonContent,
  IonHeader,
  IonInput,
  IonPage,
  IonTitle,
  IonToolbar,
  IonTextarea,
  IonButton,
  useIonToast
} from '@ionic/react';
import { createRepository } from '../services/GithubService';

import './Tab2.css';

const Tab2: React.FC = () => {
  const [name, setName] = useState<string>('');
  const [description, setDescription] = useState<string>('');
  
  const [presentToast] = useIonToast();
  const history = useHistory();

  const handleCrearRepositorio = async () => {
    if (name.trim() === '') {
      presentToast({
        message: 'Por favor, ingresa el nombre del repositorio.',
        duration: 2000,
        color: 'warning'
      });
      return; 
    }

    try {
      await createRepository(name, description, false);
      
      presentToast({
        message: '¡Repositorio creado con éxito!',
        duration: 2000,
        color: 'success'
      });
      
      setName('');
      setDescription('');

      history.push('/tab1');

    } catch (error) {
      presentToast({
        message: 'Hubo un error al crear el repositorio. Intenta con otro nombre.',
        duration: 3000,
        color: 'danger'
      });
    }
  };

  return (
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