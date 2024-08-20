import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton } from '@ionic/react';

const GamePlayPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Play Online</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Randomize opponent or challenge a friend.
            <IonButton>Start Game</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Solve Puzzles</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Play the right move from your games.
            <IonButton>Start Puzzle</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default GamePlayPage;