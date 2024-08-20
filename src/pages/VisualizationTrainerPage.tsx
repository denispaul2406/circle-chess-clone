import { IonPage, IonContent, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput } from '@ionic/react';

const VisualizationTrainerPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Blindfold Moves</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Practice visualizing and playing moves in your head. Enter the correct moves to advance.
            <IonInput type="text" placeholder="Enter your move"></IonInput>
            <IonButton>Verify Move</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Square Trainer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Improve your knowledge of squares by practicing visualizing and naming squares.
            <IonButton>Start Trainer</IonButton>
          </IonCardContent>
        </IonCard>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Calculation Trainer</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            Roleplay the moves displayed below and guess the next best move in your head.
            <IonButton>Start Calculation</IonButton>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default VisualizationTrainerPage;
