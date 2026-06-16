import { 
  IonCard, 
  IonCardContent, 
  IonCardSubtitle, 
  IonCardTitle, 
  IonContent, 
  IonHeader, 
  IonPage, 
  IonTitle, 
  IonToolbar 
} from '@ionic/react';
import './Tab3.css';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Perfil</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Perfil</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        <div className="card-container">
          <IonCard className="card">
            <img 
              src="https://avatars.githubusercontent.com/u/48026030?v=4" 
              alt="Avatar" 
            />
            <IonHeader>
              <IonCardTitle>Ariel Nicolás Toscano</IonCardTitle>
              <IonCardSubtitle>Arinico</IonCardSubtitle>
              <IonCardContent>
                <p>
                  Estudiante para desarrollo de software con experiencia en
                  aplicaciones móviles y web. Apasionado por
                  la tecnología.
                </p>
              </IonCardContent>
            </IonHeader>
          </IonCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;