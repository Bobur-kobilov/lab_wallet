import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Card, Modal, Text } from '@ui-kitten/components';

export const ModalWithBackdropShowcase = () => {

  const [visible, setVisible] = React.useState(false);

  return (
    <View style={styles.container}>

      <Button onPress={() => setVisible(true)}>
       Search
      </Button>

      <Modal
        visible={visible}
        backdropStyle={styles.backdrop}
        onBackdropPress={() => setVisible(false)}>
        <Card disabled={true}>
          <Text style={styles.text}>Chemical Products means products manufactured, processed, sold, or distributed by the Company that are chemical substances or that contain or are comprised of chemical substances, preparations or mixtures of chemical substances, including but not limited to inks, cleaning solvents, maintenance fluids and media</Text>
          <Button onPress={() => setVisible(false)}>
            DISMISS
          </Button>
        </Card>
      </Modal>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    minHeight: 292,
  },
  backdrop: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  text: {
    margin: 10
  }
});