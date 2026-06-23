import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar, useIonViewDidEnter } from '@ionic/react';
import './Tab3.css';
import React from 'react';
import { GithubUser } from '../Interfaces/GithubUser';
import { fetchUserInfo } from '../services/GithubService';
import LoadingSpinner from '../components/LoadingSpinner';

const Tab3: React.FC = () => {
  const [userInfo, setUserInfo] = React.useState<GithubUser | null>(null);
  const [loading, setLoading] = React.useState(false);
  const [errorMsg, setErrorMsg] = React.useState("");

  useIonViewDidEnter(() => {
    setLoading(true);
    fetchUserInfo().then((user) =>{
      setUserInfo(user);
    }).catch((error) =>{
      setErrorMsg("Error al cargar la informacion del usuario: " + error);
    }).finally(() => setLoading(false))
  });

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
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        
        
        <div className="card-container">
          {userInfo && (
            <IonCard className='card'>
              <img src='https://cdn-icons-png.flaticon.com/512/25/25231.png'alt='Avatar'/>
              <IonCardHeader>
                <IonCardTitle>{userInfo.name}</IonCardTitle>
                <IonCardSubtitle>{userInfo.login}</IonCardSubtitle>
              </IonCardHeader>
              <IonCardContent>
                <p>{userInfo.bio}</p>
              </IonCardContent>    
            </IonCard>
          )}
          {errorMsg && <IonText color="danger">{errorMsg}</IonText>}
        </div>
        {loading && <LoadingSpinner />}
      </IonContent>
    </IonPage>
  );
};

export default Tab3;