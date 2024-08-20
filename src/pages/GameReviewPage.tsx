import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const GameReviewPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Review Your Games</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Access all your games across different platforms, track your progress, and solve curated positions where mistakes were made.
            <IonButton>Start Review</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GameReviewPage;
