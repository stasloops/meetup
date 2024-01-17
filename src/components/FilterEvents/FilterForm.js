'use client';

import styled from 'styled-components';
import { Controller, useFormContext } from 'react-hook-form';
import { useCallback, useLayoutEffect, useMemo } from 'react';
import { observer } from 'mobx-react-lite';
import { Select } from '../Kit/Select/Select';
import {
  FFSection,
  FFSectionNull,
  FFSectionTxt,
  FFSectionTxtButton,
  FFWrapper,
  FilterBox,
  FilterForm as FF,
  FilterIcon,
  FilterText,
} from '../../styles/blocks/FilterForm';
import { FormCheckField } from './FormCheckField/FormCheckField';
import { FormCategoryCheckField } from './FormCategoryCheckField/FormCategoryCheckField';
import { filterMatrix, paymentMatrix } from '../../helpers/filterMatrix';
import { ColFlex } from '../../styles/blocks/Flex';
import { store } from '../../data/store';
import { FilterSectionHeader } from './FilterSectionHeader/FilterSectionHeader';
import { AsyncSelect } from '../Kit/Select/AsSelect';
import FilterIconSvg from '../../data/assets/svg/filter.svg';
import FiltersSkeleton from '../Skeletons/FiltersSkeleton';

const FilterFlexWrap = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

const FFSectionCheck = styled.div`
  background: ${({ theme }) => theme.controlBg};
  margin-left: -16px;
  margin-top: 16px;
  padding: 16px 16px;
`;

export const FilterForm = observer(({ onChange, initialState, mobileState, countParams, setCountParams }) => {
  const { handleSubmit, control, reset, setValue } = useFormContext({
    values: store.eventsStore._fetchConfig,
  });
  const { eventsStore } = store;

  const placeOptions = useMemo(() => {
    let options = eventsStore.filterParams?.place?.map(({ name }) => ({ value: name, label: name }));
    if (options) options = [{ value: '', label: 'Без разницы' }, ...options];

    return options;
  }, [eventsStore.filterParams?.place]);

  const organizerOptions = async () => {
    const res = eventsStore.filterParams?.organizer?.map(({ name }) => ({ value: name, label: name }));

    const organizers = [...res.map((v) => ({ value: v.value, label: v.label }))];
    return organizers.sort((a, b) => {
      return a.label.localeCompare(b.label, 'ru', { sensitivity: 'base' });
    });
  };

  const onSubmit = useCallback(
    (formData) => {
      const newParams = { ...initialState };
      let selectedCount = 0;
      [...Object.keys(initialState), 'group'].forEach((key) => {
        if (!formData[key]) return;

        if (key !== 'place' && key !== 'organizer' && !Object.values(formData[key]).includes(true)) return;

        let values = [];

        switch (key) {
          case 'place':
            newParams[key] = formData[key].value;
            if (newParams[key]) ++selectedCount;
            break;

          case 'organizer':
            newParams[key] = formData[key].label;

            if (newParams[key]) ++selectedCount;
            break;

          case 'group':
            values = Object.keys(formData[key]).filter((item) => formData[key][item]);
            values.forEach((item) => {
              newParams.type = newParams.type
                ? [...newParams.type, ...eventsStore.filterParams.groups[item].types]
                : [...eventsStore.filterParams.groups[item].types];
            });
            selectedCount += values.length;
            break;

          case 'payment':
            values = Object.keys(formData[key]).filter((item) => formData[key][item]);
            newParams[key] = values.length === 1 ? paymentMatrix[values[0]] : null;
            selectedCount += values.length;
            break;

          case 'format':
            values = Object.keys(formData[key]).filter((item) => formData[key][item]);
            newParams[key] = values.length === 1 ? values[0] : values;
            selectedCount += values.length;
            break;

          default:
            newParams[key] = null;
        }
      });

      eventsStore.fetchFilterParams();
      onChange(newParams);
      setCountParams(selectedCount);
    },
    [eventsStore, initialState, onChange, setCountParams],
  );

  const resetForm = () => {
    reset();
    setCountParams(0);
    store.eventsStore.setFetchConfig({ ...initialState, name: '' });
    eventsStore.fetchFilterParams();
  };

  const rules = {
    onChange: () => {
      handleSubmit(onSubmit)();
    },
  };

  const realCountParams = !!countParams;

  const { events, ...etcConfig } = eventsStore;
  const searchString = store.eventsStore._fetchConfig.name;

  const handleChangeOrg = (org) => {
    if (org !== null) {
      setValue('organizer', org);
      handleSubmit(onSubmit)();
    } else {
      setValue('organizer', org);
      handleSubmit(onSubmit)();
    }
  };

  useLayoutEffect(() => {
    if (eventsStore.inCardOrganizerSelect) {
      const { organizer } = eventsStore._fetchConfig;

      setValue('organizer', { value: organizer, label: organizer });
      eventsStore.toggleInCardOrganizerSelect(false);
      handleSubmit(onSubmit)();
    }
  }, [eventsStore, eventsStore._fetchConfig, eventsStore.inCardOrganizerSelect, handleSubmit, onSubmit, setValue]);

  return (
    <FFWrapper>
      {/* {eventsStore.filterParams?.format ? ( */}
        <FF className={mobileState ? 'open' : ''} style={{ paddingTop: 0, paddingRight: 0 }}>
          <FFSectionNull>
            <ColFlex>
              {realCountParams && <FFSectionTxt>Выбрано: {countParams}</FFSectionTxt>}
              <FilterFlexWrap>
                <FilterBox>
                  <FilterIcon>
                    <FilterIconSvg />
                  </FilterIcon>
                  <FilterText>Фильтры</FilterText>
                </FilterBox>
                {(realCountParams || (searchString && searchString.length)) > 0 ? (
                  <FFSectionTxtButton onClick={resetForm}>Сбросить фильтры</FFSectionTxtButton>
                ) : null}
              </FilterFlexWrap>
            </ColFlex>
          </FFSectionNull>

          <FFSectionNull>
            <Controller
              rules={rules}
              control={control}
              name="place"
              render={({ field }) => <Select {...field} options={placeOptions} placeholder="Где" />}
            />
          </FFSectionNull>

          <FFSectionNull>
            <AsyncSelect
              defaultValue={
                store.eventsStore._fetchConfig.organizer !== null
                  ? {
                      value: store.eventsStore._fetchConfig.organizer,
                      label: store.eventsStore._fetchConfig.organizer,
                    }
                  : undefined
              }
              onChange={handleChangeOrg}
              loadOptions={organizerOptions}
              placeholder="Организатор"
            />
          </FFSectionNull>

          <FFSectionCheck>
            <FFSection style={{ paddingTop: 0, marginTop: 0 }}>
              <FilterSectionHeader>Формат</FilterSectionHeader>
              {eventsStore.filterParams?.format
                ?.map((item, i) => ({ ...item, id: i }))
                .map((item) => {
                  return (
                    <Controller
                      key={item.id}
                      rules={rules}
                      control={control}
                      name={`format.${item.name}`}
                      render={({ field }) => {
                        return (
                          <FormCheckField
                            {...field}
                            value={
                              etcConfig?._fetchConfig?.format &&
                              (item.name === etcConfig?._fetchConfig?.format || etcConfig?._fetchConfig?.format.includes(item.name))
                            }
                            label={filterMatrix[item.name]}
                            // eslint-disable-next-line no-underscore-dangle
                            count={item._count}
                          />
                        );
                      }}
                    />
                  );
                })}
            </FFSection>
            <FFSection>
              <FilterSectionHeader>Участие</FilterSectionHeader>
              {eventsStore.filterParams.payment
                ?.map((item, i) => ({ ...item, id: i }))
                .map((item) => {
                  return (
                    <Controller
                      key={item.id}
                      rules={rules}
                      control={control}
                      name={`payment.${item.name}`}
                      render={({ field }) => (
                        // eslint-disable-next-line no-underscore-dangle
                        <FormCheckField
                          {...field}
                          defaultValue={etcConfig?._fetchConfig.payment && item.id === etcConfig?._fetchConfig.payment}
                          label={filterMatrix[item.name]}
                          // eslint-disable-next-line no-underscore-dangle
                          count={item._count}
                        />
                      )}
                    />
                  );
                })}
            </FFSection>
            <FFSection>
              <FilterSectionHeader style={{ marginBottom: 0 }}>Тип</FilterSectionHeader>
              {!!Object.keys(eventsStore.filterParams.groups || {}).length &&
                Object.entries(eventsStore.filterParams.groups)?.map(([key, data]) => {
                  return (
                    <Controller
                      key={key}
                      rules={rules}
                      control={control}
                      name={`group.${key}`}
                      render={({ field }) => (
                        <FormCategoryCheckField
                          {...field}
                          {...etcConfig?._fetchConfig.type}
                          label={key}
                          count={data._count}
                          value={
                            etcConfig?._fetchConfig.type !== null &&
                            ((key === 'Большие' && etcConfig?._fetchConfig.type.includes('Конференция')) ||
                              (key === 'Образовательные' && etcConfig?._fetchConfig.type.includes('Курс')) ||
                              (key === 'Специализированные' && etcConfig?._fetchConfig.type.includes('Семинар')) ||
                              (key === 'Небольшие' && etcConfig?._fetchConfig.type.includes('Митап')) ||
                              (key === 'Соревновательные' && etcConfig?._fetchConfig.type.includes('Хакатон')))
                          }
                          description={data.types.map((s, idx) => (idx === 0 ? s : s.toLowerCase())).join(', ')}
                        />
                      )}
                    />
                  );
                })}
            </FFSection>
          </FFSectionCheck>
        </FF>
  
    </FFWrapper>
  );
});
