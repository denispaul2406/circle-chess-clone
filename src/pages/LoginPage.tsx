import { IonPage, IonContent, IonInput, IonButton, IonLabel, IonItem, IonList } from '@ionic/react';

const LoginPage: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        <IonList>
          <IonItem>
            <IonLabel>Mobile Number</IonLabel>
            <IonInput type="text" placeholder="Enter mobile number"></IonInput>
          </IonItem>
          <IonButton>Send OTP</IonButton>
          <IonItem>
            <IonLabel>Select Player</IonLabel>
            <IonInput type="text" placeholder="Username"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Email Address</IonLabel>
            <IonInput type="email" placeholder="Enter email"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Enter Lichess Username</IonLabel>
            <IonInput type="text" placeholder="Lichess Username"></IonInput>
          </IonItem>
          <IonItem>
            <IonLabel>Enter Chess.com Username</IonLabel>
            <IonInput type="text" placeholder="Chess.com Username"></IonInput>
          </IonItem>
          <IonButton>Submit</IonButton>
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default LoginPage;