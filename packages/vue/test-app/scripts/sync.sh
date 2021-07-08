# Copy ionic vue dist
rm -rf node_modules/@ionic/vue/dist node_modules/@ionic/vue/css
cp -a ../dist node_modules/@ionic/vue/dist
cp -a ../css node_modules/@ionic/vue/css
cp -a ../package.json node_modules/@ionic/vue/package.json

# Copy ionic vue router dist
rm -rf node_modules/@ionic/vue-router/dist
cp -a ../../vue-router/dist node_modules/@ionic/vue-router/dist
cp -a ../../vue-router/package.json node_modules/@ionic/vue-router/package.json

# Copy core dist and components
rm -rf node_modules/@ionic/core/dist node_modules/@ionic/core/components
cp -a ../../../core/package.json node_modules/@ionic/core/package.json
cp -a ../../../core/dist node_modules/@ionic/core/dist
cp -a ../../../core/components node_modules/@ionic/core/components

# Copy ionicons
rm -rf node_modules/ionicons
cp -a ../../../core/node_modules/ionicons node_modules/ionicons
