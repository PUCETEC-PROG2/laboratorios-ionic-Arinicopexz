import React from "react";
import { Repository } from "../Interfaces/Repository";
import { IonIcon, IonItem, IonItemOption, IonItemOptions, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import { pencil, trash } from "ionicons/icons";

const RepoItem: React.FC<Repository> = (Repository) => {
    return(
                  <IonItemSliding>
                    <IonItem>
                      <IonThumbnail slot="start">
                        <img
                          src={Repository.avatarUrl}
                          alt={Repository.name}
                        />
                      </IonThumbnail>
        
                      <IonLabel>
                        <h3>{Repository.name}</h3>
                        <p>{Repository.description}</p>
                        <p>
                          <strong>Lenguaje:</strong> {Repository.language}
                        </p>
                      </IonLabel>
                    </IonItem>
        
                    <IonItemOptions>
                      <IonItemOption>
                        <IonIcon icon={pencil} slot="icon-only" />
                      </IonItemOption>
        
                      <IonItemOption color="danger">
                        <IonIcon icon={trash} slot="icon-only" />
                      </IonItemOption>
                    </IonItemOptions>
                  </IonItemSliding>
    );
}
 export default RepoItem