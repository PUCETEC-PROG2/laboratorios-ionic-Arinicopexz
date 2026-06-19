import React from "react";
import { Repository } from "../Interfaces/Repository";
import { IonItem, IonItemOption, IonItemOptions, IonIcon, IonItemSliding, IonLabel, IonThumbnail } from "@ionic/react";
import { pencil, trash } from "ionicons/icons";


const RepoItem: React.FC<Repository> = (repository) => {
  return (
    <IonItemSliding>
      <IonItem>
        <IonThumbnail slot="start">
          <img src={repository.owner.avatar_url}
            alt={repository.name} />
        </IonThumbnail>
        <IonLabel>
          <h3>{repository.name}</h3>
          {repository.description && (
            <p>{repository.description}</p>
          )}
          {repository.language && (
            <p>
              <strong>Lenguaje</strong>.{repository.language}
            </p>
          )}
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

export default RepoItem;